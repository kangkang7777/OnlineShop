package com.example.test.entity;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection="user")
public class User {
    @Id
    private String id;
    private String account;
    private String password;
    private List<Integer> cart;
    private List<List<Integer>> order;
    public User()
    {
        cart = new ArrayList<>();
        order = new ArrayList<>();

        for(int i =0;i<7;i++)
            cart.set(i,0);
    }

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getAccount() {
        return account;
    }
    public void setAccount(String account) {
        this.account = account;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public List<Integer> getCart() {
        return cart;
    }
    public void setCart(List<Integer> cart) {
        this.cart = cart;
    }

    public List<List<Integer>> getOrder() {
        return order;
    }
    public void setOrder(List<List<Integer>> order) {
        this.order = order;
    }

}
