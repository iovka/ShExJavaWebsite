package fr.inria.shexjavaweb;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import io.micrometer.core.annotation.Timed;

@Controller
@Timed("web")
public class WebController {
	
	@GetMapping({"/","index","index.*"})
	@Timed(value = "web.index")
    public String greeting(Model model) {
        return "index";
    }
	
	@GetMapping("/javadocs/**")
	@Timed(value = "web.javadocs")
    public String javadocRoot(Model model,HttpServletRequest request) {
		String base = new String(request.getRequestURL());
		base = base.split("/javadocs/")[1];
        return "/javadocs/"+base;
    }
	
	@GetMapping("/demonstrator")
	@Timed(value = "web.demonstrator.get", longTask = true)
    public String demonstrator(Model model) {
		model.addAttribute("request",new RequestValidation());
		model.addAttribute("result",new RequestResult());
        return "demonstrator";
    }
	
	@PostMapping("/demonstrator")
	@Timed(value = "web.demonstrator.post", longTask = true)
    public String validate(@ModelAttribute RequestValidation validation, Model model) {
		model.addAttribute("request",validation);
		model.addAttribute("result", new RequestResult(validation));
        return "demonstrator";
    }
	
}