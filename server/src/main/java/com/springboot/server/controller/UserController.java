package com.springboot.server.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.server.model.User;
import com.springboot.server.repository.UserRepository;



@CrossOrigin(origins = "http://localhost:8100")
@RestController
@RequestMapping("/api")
public class UserController {
	
	Logger logger = LoggerFactory.getLogger(UserController.class);
	
	
  @Autowired
  UserRepository userRepo;
  
  @GetMapping("/users")
  public ResponseEntity<List<User>> getAllUsers(@RequestParam(required = false) String first_name) {
    try {
      List<User> users = new ArrayList<User>();
      if (first_name == null)
        userRepo.findAll().forEach(users::add);
      else
        userRepo.findByFirstNameContaining(first_name).forEach(users::add);
      if (users.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }
      return new ResponseEntity<>(users, HttpStatus.OK);
    } catch (Exception e) { 
    	logger.error("crap",e);
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @GetMapping("/users/{id}")
  public ResponseEntity<User> getUserById(@PathVariable("id") long id) {
    Optional<User> userData = userRepo.findById(id);
    if (userData.isPresent()) {
      return new ResponseEntity<>(userData.get(), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }
  
  @GetMapping("/users/email/{email}")
  public ResponseEntity<User> getUserByEmail(@PathVariable("email") String email) {
    Optional<User> userData = userRepo.findByEmail(email);
    if (userData.isPresent()) {
      return new ResponseEntity<>(userData.get(), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }
  
  
  @PostMapping("/users")
  public ResponseEntity<User> createUser(@RequestBody User user) {
    try {
      User _user = userRepo
          .save(new User(
        		  user.getFirstName(),
        		  user.getLastName(),
        		  user.getUserType(),
        		  user.getLoginType(),
        		  new Date(),
        		  user.getEmail(),
        		  user.getPassword()
        		  ));
      return new ResponseEntity<>(_user, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @PutMapping("/users/{id}")
  public ResponseEntity<User> updateUser(@PathVariable("id") long id, @RequestBody User user) {
    Optional<User> userData = userRepo.findById(id);
    if (userData.isPresent()) {
      User _user = userData.get();
      _user.setFirstName(user.getFirstName());
      _user.setLastName(user.getLastName());
      _user.setUserType(user.getUserType());
      _user.setLoginType(user.getLoginType());
      _user.setDateCreated(user.getDateCreated());
      return new ResponseEntity<>(userRepo.save(_user), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }
  @DeleteMapping("/users/{id}")
  public ResponseEntity<HttpStatus> deleteUser(@PathVariable("id") long id) {
    try {
      userRepo.deleteById(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @DeleteMapping("/users")
  public ResponseEntity<HttpStatus> deleteAllUsers() {
    try {
      userRepo.deleteAll();
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @GetMapping("/users/subleasers")
  public ResponseEntity<List<User>> findSubleasers() {
    try {
      List<User> users = userRepo.findByUserType(1);
      if (users.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }
      return new ResponseEntity<>(users, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
  @GetMapping("/users/sublettors")
  public ResponseEntity<List<User>> findSublettors() {
    try {
      List<User> users = userRepo.findByUserType(2);
      if (users.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }
      return new ResponseEntity<>(users, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
