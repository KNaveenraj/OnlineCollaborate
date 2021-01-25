package com.coll.OnlineCollaborate.dao;

import java.util.List;

import com.coll.OnlineCollaborate.model.BlogComments;

public interface IBlogCommentsDao {

	List<BlogComments> getAllBlogComments();
	BlogComments getBlogCommentsById(int blogCommentsid);
	boolean addBlog(BlogComments blogComments);
	boolean updateBlog(BlogComments blogComments);
	boolean deleteBlog(BlogComments blogComments);
}
