package project1.Bus_Backend.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project1.Bus_Backend.Repository.SignupRepository;
import project1.Bus_Backend.signup;

@RestController
@RequestMapping("/api")
public class SignupController {

	@Autowired
	private SignupRepository signupRepository;

	@PostMapping("/signup")
	public signup signup(@RequestBody signup signup) {
		return signupRepository.save(signup);
	}

	@PostMapping("/login")
	public ResponseEntity<Map<String, String>> login(@RequestBody Map<String, String> loginData) {
		String email = loginData.get("email");
		String password = loginData.get("password");

		Optional<signup> user = signupRepository.findByEmailAndPassword(email, password);

		if (user.isPresent()) {
			Map<String, String> response = new HashMap<>();
			response.put("message", "Login successful");
			return ResponseEntity.ok(response);
		} else {
			Map<String, String> errorResponse = new HashMap<>();
			errorResponse.put("message", "Invalid email or password");
			return ResponseEntity.status(401).body(errorResponse);
		}
	}

	@GetMapping("/signup/total")
	public ResponseEntity<Long> getTotalUsers() {
		long totalUsers = signupRepository.count();
		return ResponseEntity.ok(totalUsers);
	}
	
	@GetMapping("signup")
	  public List<signup> getAllUsers() {
	        return signupRepository.findAll();
	    }
	  
	  @DeleteMapping("/signup/{id}")
	    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
	        if (signupRepository.existsById(id)) {
	            signupRepository.deleteById(id);
	            return ResponseEntity.ok("User deleted successfully");
	        } else {
	            return ResponseEntity.status(404).body("User not found");
	        }
	    }

}
