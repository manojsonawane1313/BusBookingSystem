package project1.Bus_Backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import project1.Bus_Backend.Ticket;

import java.util.List;
import java.util.Optional;

public interface TicketRepository extends JpaRepository<Ticket, Long> {
    List<Ticket> findByEmail(String email);
    
//    Optional<Ticket> findByBusNumber(String seatno);
    List<Ticket> findByBusNumber(String busNumber);
}
