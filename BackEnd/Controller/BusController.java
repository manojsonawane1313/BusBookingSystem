package project1.Bus_Backend.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import project1.Bus_Backend.Bus;
import project1.Bus_Backend.Repository.BusRepository;

@RestController
@RequestMapping("/api/buses")
public class BusController {

    @Autowired
    private BusRepository busRepository;

    @PostMapping
    public Bus addBus(@RequestBody Bus bus) {
        return busRepository.save(bus);
    }
    
    
    @GetMapping
    public List<Bus> getBuses(@RequestParam String source, @RequestParam String destination) {
        return busRepository.findBySourceAndDestination(source, destination);
    }
    
    
    @PutMapping("/{id}")
    public Bus updateBus(@PathVariable Long id, @RequestBody Bus updatedBus) {
        Optional<Bus> optionalBus = busRepository.findById(id);
        if (optionalBus.isPresent()) {
            Bus existingBus = optionalBus.get();
            existingBus.setBusNumber(updatedBus.getBusNumber());
            existingBus.setDriverName(updatedBus.getDriverName());
            existingBus.setMobile(updatedBus.getMobile());
            existingBus.setSource(updatedBus.getSource());
            existingBus.setDestination(updatedBus.getDestination());
            existingBus.setRoute(updatedBus.getRoute());
            existingBus.setSourceTime(updatedBus.getSourceTime());
            existingBus.setDestinationTime(updatedBus.getDestinationTime());
            existingBus.setPrice(updatedBus.getPrice());
            return busRepository.save(existingBus);
        } else {
            throw new RuntimeException("Bus not found with id: " + id);
        }
    }
    

    // Delete a bus by ID
    @DeleteMapping("/{id}")
    public void deleteBus(@PathVariable Long id) {
        if (busRepository.existsById(id)) {
            busRepository.deleteById(id);
        } else {
            throw new RuntimeException("Bus not found with id: " + id);
        }
    }
    
    @GetMapping("/total")
    public ResponseEntity<Long> getTotalBookings() {
        long totalBookings = busRepository.count();
        return ResponseEntity.ok(totalBookings);
    }
    
    @GetMapping("/listbuses")
    public List<Bus> getAllBuses() {
        return busRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Bus> getBusById(@PathVariable Long id) {
        Optional<Bus> optionalBus = busRepository.findById(id);
        if (optionalBus.isPresent()) {
            return ResponseEntity.ok(optionalBus.get());
        } else {
            throw new RuntimeException("Bus not found with id: " + id);
        }
    }
}
