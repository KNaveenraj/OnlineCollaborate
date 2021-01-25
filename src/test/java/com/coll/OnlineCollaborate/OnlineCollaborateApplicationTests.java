package com.coll.OnlineCollaborate;

import static org.junit.Assert.assertEquals;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.coll.OnlineCollaborate.dao.IUserDao;
import com.coll.OnlineCollaborate.daoImpl.UserDaoImpl;
import com.coll.OnlineCollaborate.model.User;

@RunWith(SpringRunner.class)
@SpringBootTest
class OnlineCollaborateApplicationTests {

	@Test
	void contextLoads() {
	}

	@Autowired
	UserDaoImpl user;
	
	@Test
	public void testGetAllUsers() {
		List<User> users=user.getAllUsers();
		assertEquals(1,users.size());
	}
}
