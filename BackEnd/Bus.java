package project1.Bus_Backend;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

import java.time.LocalTime;
import java.util.List;

@Entity
public class Bus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String busNumber;
    private String driverName;
    private String mobile;
    private String source;
    private String destination;
    private String route;
    private LocalTime sourceTime;
    private LocalTime destinationTime;
    private String price;

	// Getters and Setters
    public String getBusNumber() {
        return busNumber;
    }
    public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public void setBusNumber(String busNumber) {
        this.busNumber = busNumber;
    }
    public String getDriverName() {
        return driverName;
    }
    public void setDriverName(String driverName) {
        this.driverName = driverName;
    }
    public String getMobile() {
        return mobile;
    }
    public void setMobile(String mobile) {
        this.mobile = mobile;
    }
    public String getSource() {
        return source;
    }
    public void setSource(String source) {
        this.source = source;
    }
    public String getDestination() {
        return destination;
    }
    public void setDestination(String destination) {
        this.destination = destination;
    }
    public String getRoute() {
        return route;
    }
    public void setRoute(String route) {
        this.route = route;
    }
    public LocalTime getSourceTime() {
        return sourceTime;
    }
    public void setSourceTime(LocalTime sourceTime) {
        this.sourceTime = sourceTime;
    }
    public LocalTime getDestinationTime() {
        return destinationTime;
    }
    public void setDestinationTime(LocalTime destinationTime) {
        this.destinationTime = destinationTime;
    }
    
    public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
}
