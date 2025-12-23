package project1.Bus_Backend.Controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import project1.Bus_Backend.Ticket;
import project1.Bus_Backend.Repository.TicketRepository;



@RestController
@RequestMapping("/api/tickets")
public class TicketController {

    // Assuming a TicketRepository is available for database interactions
    private TicketRepository ticketRepository;

    public TicketController(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    
    @PostMapping
    public Ticket addTicket(@RequestBody Ticket ticket) {
        return ticketRepository.save(ticket);
    }
   
    @GetMapping("/{email}")
    public ResponseEntity<List<Ticket>> getTicketsByEmail(@PathVariable String email) {
        List<Ticket> tickets = ticketRepository.findByEmail(email);
        if (tickets.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(tickets);
    }
    
    @GetMapping
    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }
    
    @GetMapping("/total")
    public ResponseEntity<Long> getTotalBookings() {
        long totalBookings = ticketRepository.count();
        return ResponseEntity.ok(totalBookings);
    }
    
    @GetMapping("/bus/{busNumber}")
    public ResponseEntity<List<String>> getSeatsByBusNumber(@PathVariable String busNumber) {
        List<Ticket> tickets = ticketRepository.findByBusNumber(busNumber);
        if (tickets.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        // Map each ticket to its seat number
        List<String> seatNumbers = tickets.stream()
                                          .map(Ticket::getSeatno)
                                          .collect(Collectors.toList());
        return ResponseEntity.ok(seatNumbers);
    }




}

