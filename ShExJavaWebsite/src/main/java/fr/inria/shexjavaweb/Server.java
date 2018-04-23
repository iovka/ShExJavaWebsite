package fr.inria.shexjavaweb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import io.micrometer.core.instrument.binder.jvm.JvmThreadMetrics;

@SpringBootApplication
public class Server {

	 @Bean
	 JvmThreadMetrics threadMetrics() {
	     return new JvmThreadMetrics();
	 }

	
    public static void main(String[] args) {
        SpringApplication.run(Server.class, args);
    }
}