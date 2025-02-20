using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace frontend.src.code;

    public class Program
    {
        using api.Middleware;
        using Microsoft.OpenApi.Models;

        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.
        // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
        builder.Services.AddOpenApi();
        builder.Services.AddControllers();
        builder.Services.AddSwaggerGen(options =>
        {
            options.SwaggerDoc("v1", new OpenApiInfo { Title = "Demo API", Version = "v1" });
        });

        builder.Services.AddControllersWithViews();

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseMiddleware<TraceMiddleware>();

        app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

        app.UseStaticFiles();
        app.UseRouting();
        app.UseHttpsRedirection();

        app.MapControllers();

        app.MapControllerRoute(
            name: "default",
            pattern: "{controller=Home}/{action=Index}/{id?}");

        app.Run();
    }

    using Microsoft.AspNetCore.Mvc;

    
    public class HomeController(ILogger<HomeController> logger) : Controller
    {
        private readonly ILogger<HomeController> _logger = logger;

        public IActionResult Index()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View("Error!");
        }
    }

    [ApiController]
    [Route("api/files")]
    public class FileController : ControllerBase
    {
        private readonly string filePath = "wwwroot/files/example.txt";

        [HttpPut]
        public IActionResult PutFile([FromBody] string content)
        {
            System.IO.File.WriteAllText(filePath, content);
            return Ok(new { message = "File updated successfully." });
        }

        [HttpDelete]
        public IActionResult DeleteFile()
        {
            if (System.IO.File.Exists(filePath))
            {
                System.IO.File.Delete(filePath);
                return Ok(new { message = "File deleted successfully." });
            }
            return NotFound(new { message = "File not found." });
        }

        [HttpOptions]
        public IActionResult Options()
        {
            Response.Headers.Add("Allow", "GET, POST, OPTIONS");
            return Ok();
        }
    }