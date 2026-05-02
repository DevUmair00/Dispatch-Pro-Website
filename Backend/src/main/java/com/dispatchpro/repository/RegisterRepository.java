package com.dispatchpro.repository;

import com.dispatchpro.model.Register;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegisterRepository extends JpaRepository<Register , Long> {
}
