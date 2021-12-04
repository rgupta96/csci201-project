package com.springboot.server.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.server.model.Property;

public interface PropertyRepository extends JpaRepository <Property, Long>{
	List<Property> findByHeadlineContaining(String headline);
	List<Property> findByDescriptionContaining(String description);
	List<Property> findByAmenitiesContaining(String amenities);
	List<Property> findByPrice(int price);
	List<Property> findByDuration(int duration);
}
