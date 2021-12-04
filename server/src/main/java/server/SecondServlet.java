package server;

import java.sql.*;
import java.io.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;

//@WebServlet("/SecondServlet")
public class SecondServlet extends HttpServlet {

   private String message;

   public void init() throws ServletException {
      // Do required initialization
      message = "First Servlet";
   }

   public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
	   
	   	String url="jdbc:mysql://aa142u4sphl2293.ci11g6wlkc9n.us-west-1.rds.amazonaws.com:3306";
		String userName = "admin";
		String password = "csci201project";
		String dbName = "/project-db";
		String sql= "SELECT * FROM users";
		Connection conn=null;
		Statement st1=null;
		ResultSet rs = null;
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			conn = DriverManager.getConnection(url + dbName, userName, password);
//			Statement st = conn.createStatement();
			st1 = conn.createStatement();
			rs = st1.executeQuery(sql);
			response.setContentType("text/html");
			PrintWriter out = response.getWriter();
			
			while (rs.next()) {
				out.println("<h1>" + message + "</h1>");
				out.println(
					rs.getInt("id") + "\t" +
					rs.getString("first_name") + "\t" +
					rs.getString("last_name"));
			}
			
			// Set response content type
		    

		      // Actual logic goes here.
		    
		    
			
		} catch (SQLException ex) {
			System.out.println("SQLException: " + ex.getMessage());
		} catch (ClassNotFoundException cnfe) {
			System.out.println("CNFEException: " + cnfe.getMessage());
		}
		
		finally {
			if (rs!=null)
				try {
					rs.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			if (st1 !=null)
				try {
					st1.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			if (conn!=null)
				try {
					conn.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		}
   }

   public void destroy() {
      // do nothing.
   }
}