//Контролер
[ApiController]
[Route("api/greet")]
public class GreetController : ControllerBase
{
  [HttpPost]
  public IActionResult Greet([FromBody] string name)
  {
    var greeting = $"Привіт, {name}!";
    return Ok(new { greeting });
  }
}

[ApiController]
[Route("api/time")]
public class TimeController : ControllerBase
{
     [HttpGet]
    public IActionResult GetTime()
    {
        // throw new Exception("Це тестова помилка для 500 Internal Server Error.");
        var time = DateTime.UtcNow.ToString("HH:mm:ss");
        return Ok(new { time });
    }
}

//Middleware
public class ExceptionHandlingMiddleware(RequestDelegate next, ILogger<ExceptionHandlingMiddleware> logger)
{
  private readonly RequestDelegate _next = next;
  private readonly ILogger<ExceptionHandlingMiddleware> _logger = logger;

  public async Task InvokeAsync(HttpContext context)
  {
    try
    {
      await _next(context);
    }
    catch (Exception ex)
    {
      _logger.LogError(ex, "Помилка під час обробки запиту");

      context.Response.ContentType = "application/json";
      context.Response.StatusCode = StatusCodes.Status500InternalServerError;

      var response = new
      {
        StatusCode = context.Response.StatusCode,
        Message = "Помилка на сервері",
        Error = ex.Message
      };

      var json = JsonSerializer.Serialize(response);
      await context.Response.WriteAsync(json);
    }
  }
}

public class RequestLoggingMiddleware(RequestDelegate next, ILogger<RequestLoggingMiddleware> logger)
{
    private readonly RequestDelegate _next = next;
    private readonly ILogger<RequestLoggingMiddleware> _logger = logger;

    public async Task InvokeAsync(HttpContext context)
    {
        var method = context.Request.Method;
        var path = context.Request.Path;

        _logger.LogInformation("HTTP-запит: {Method} {Path}", method, path);

        await _next(context);
    }
}