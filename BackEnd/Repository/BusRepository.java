package project1.Bus_Backend.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import project1.Bus_Backend.Bus;

public interface BusRepository extends JpaRepository<Bus,Long>{
	List<Bus> findBySourceAndDestination(String source, String destination);
}
