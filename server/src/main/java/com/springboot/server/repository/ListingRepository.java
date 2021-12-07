package com.springboot.server.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.server.model.Listing;

public interface ListingRepository extends JpaRepository <Listing, Long>{
	List<Listing> findByUserId(int user_id);
	List<Listing> findByPropertyId(int property_id);
}
