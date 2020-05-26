package com.example.test.adapter;


import com.example.test.application.application;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(value="/register")
public class registerController {
    private application usersApplication;

    @Autowired
    public registerController(application usersApplication) {
        this.usersApplication = usersApplication;
    }

    @PostMapping
    public boolean addUser(@RequestParam String account, @RequestParam String password)
    {
        return usersApplication.addUser(account, password);
    }


}
