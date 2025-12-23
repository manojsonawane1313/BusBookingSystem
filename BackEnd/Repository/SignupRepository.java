package project1.Bus_Backend.Repository;

import java.util.Optional;

import org.hibernate.type.descriptor.converter.spi.JpaAttributeConverter;
import org.springframework.data.jpa.repository.JpaRepository;

import project1.Bus_Backend.signup;


public interface SignupRepository extends JpaRepository<signup, Long> {
	 Optional<signup> findByEmailAndPassword(String email, String password);

}
