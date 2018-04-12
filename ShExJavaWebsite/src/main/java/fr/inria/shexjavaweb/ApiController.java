package fr.inria.shexjavaweb;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import fr.inria.shexjavaweb.query.Goodbye;
import fr.inria.shexjavaweb.query.Greeting;

@RestController
public class ApiController {
	private final String api= "api";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/"+api+"/greeting")
    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new Greeting(counter.incrementAndGet(),
                            String.format("Hello, %s!", name));
    }
    
    @RequestMapping("/"+api+"/goodbye")
    public Goodbye goodbye(@RequestParam(value="name", defaultValue="World") String name) {
        return new Goodbye(counter.incrementAndGet(),
                            String.format("Goodbye, %s!", name));
    }
}