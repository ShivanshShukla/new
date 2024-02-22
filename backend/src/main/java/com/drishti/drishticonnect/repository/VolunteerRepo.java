package com.drishti.drishticonnect.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.drishti.drishticonnect.Entity.Volunteer;

public interface VolunteerRepo extends JpaRepository<Volunteer,Integer> {
    
} 