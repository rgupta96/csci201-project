package com.springboot.server;

import java.util.Date;
import com.springboot.server.model.User;


public class CreateUser extends Thread {
	User oldUser;
	User clonedUser;
	public CreateUser(User user) {
		oldUser = user;
  }	

	/**
	 * Trading function using locks
	 */
	public void run() {
		clonedUser = new User(
			oldUser.getFirstName(),
			oldUser.getLastName(),
			oldUser.getUserType(),
			oldUser.getLoginType(),
			new Date(),
			oldUser.getEmail(),
			oldUser.getPassword()
			);
	}

	public User getUser() {
		return clonedUser;
	}
}
