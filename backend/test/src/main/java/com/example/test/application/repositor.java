package com.example.test.application;
import com.example.test.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface repositor extends MongoRepository<User, String> {
    User findUserByAccount(String account);
    User findUserByAccountAndPassword (String account,String password);
}
