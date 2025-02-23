//Контролер
[ApiController]
[Route("api/events")]
public class EventsController : ControllerBase
{
  readonly List<Event> EventList =
  [
      new Event { Name = "Tech Conference 2025", Author = "John Doe", Date = "2025-02-10", Places = 250 },
        new Event { Name = "Startup Pitch Night", Author = "Sarah Johnson", Date = "2025-02-12", Places = 150 },
        new Event { Name = "AI & Machine Learning Summit", Author = "Michael Smith", Date = "2025-02-10", Places = 300 },
        new Event { Name = "Cybersecurity Workshop", Author = "Emily Davis", Date = "2025-03-15", Places = 100 },
        new Event { Name = "Blockchain & Web3 Forum", Author = "Daniel Martinez", Date = "2025-02-10", Places = 200 }
  ];

  [HttpGet]
  public IActionResult GetEvents([FromQuery] string date)
  {
    if (string.IsNullOrEmpty(date)) return BadRequest("Date is required");

    return EventList.Any(e => e.Date == date) ? Ok(EventList.Where(e => e.Date == date)) : NotFound("No events found for this date");
  }

}

//fetch

export const getEvents = async (date: string) => {
  const res = await fetch(`http://localhost:5203/api/events?date=${date}`);
  return await res.json();
};


//Сторінка 

interface Event {
  name: string;
  author: string;
  date: string;
  places: number;
}

const MainPage = () => {
  const [date, setDate] = useState("");
  const [events, setEvents] = useState<Event[]>([]);

  const handleSearch = async () => {
    if (!date) {
      alert("Введіть дату!");
      return;
    }

    try {
      const data = await getEvents(date);

      if (Array.isArray(data)) {
        setEvents(data);
      } else {
        setEvents([]);
      }
    } catch (error) {
      console.error("Помилка при отриманні подій:", error);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <div className="flex gap-2">
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Button onClick={handleSearch}>Пошук</Button>
      </div>

      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead>Назва</TableHead>
            <TableHead>Автор</TableHead>
            <TableHead>Дата</TableHead>
            <TableHead>Місць</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                Немає подій
              </TableCell>
            </TableRow>
          ) : (
            events.map((event, index) => (
              <TableRow key={index} className="text-left">
                <TableCell>{event.name}</TableCell>
                <TableCell>{event.author}</TableCell>
                <TableCell>{event.date}</TableCell>
                <TableCell>{event.places}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default MainPage;
