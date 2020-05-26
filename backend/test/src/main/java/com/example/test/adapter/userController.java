package com.example.test.adapter;

import com.example.test.application.application;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value="/user")
public class userController {
    private application usersApplication;

    @Autowired
    public userController(application usersApplication) {
        this.usersApplication = usersApplication;
    }

    @PostMapping("/checkOut")
    public boolean checkOut(@RequestParam String account)
    {
        return usersApplication.checkOut(account);
    }

    @PostMapping("/addCart")
    public boolean addCart(@RequestParam String account, @RequestParam int num)
    {
        return usersApplication.addCart(account,num);
    }

    @PostMapping("/getOrder")
    public List<List<Integer>> getOrder(@RequestParam String account)
    {
        return usersApplication.getOrder(account);
    }

}
