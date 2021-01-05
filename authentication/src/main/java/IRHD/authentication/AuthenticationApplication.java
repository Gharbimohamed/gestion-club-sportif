package IRHD.authentication;

import IRHD.authentication.Repository.UsserRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackageClasses = UsserRepository.class)
public class AuthenticationApplication {




	public static void main(String[] args) {
		SpringApplication.run(AuthenticationApplication.class, args);
	}

}
