package com.example.demo.patient;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
interface PatientRepository extends JpaRepository<Patient,Long> {

}