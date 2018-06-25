package fr.inria.shexjavaweb;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import io.micrometer.core.annotation.Timed;

@Controller
public class WebController {
		

	@Timed(value="shexweb.index.timer")
	@GetMapping({"/","index","index.*"})
    public String greeting(Model model) {
        return "index";
    }
	
	@Timed(value="shexweb.javadocs.timer")
	@GetMapping("/javadocs/**/*.html")
    public String javadocRoot(Model model,HttpServletRequest request) {
		String base = new String(request.getRequestURL());
		base = base.split("/javadocs/")[1];
        return "/javadocs/"+base;
    }
	
	@Timed(value="shexweb.demonstrator.timer")
	@GetMapping("/demonstrator")
    public String demonstrator(Model model) {
		model.addAttribute("request",new RequestValidation());
		model.addAttribute("result",new RequestResult());
        return "demonstrator";
    }
	
	@Timed(value="shexweb.demonstrator.timer")
	@PostMapping("/demonstrator")
    public String validate(@ModelAttribute RequestValidation validation, Model model) {
		model.addAttribute("request",validation);
		model.addAttribute("result", new RequestResult(validation));
        return "demonstrator";
    }
	
}