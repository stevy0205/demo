package com.example.demo.patient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping(path= "api/v1/patient")
public class PatientController {

    private final PatientService patientService;

    @Autowired
    public PatientController(PatientService patientService ){
        this.patientService = patientService;
    }

    @GetMapping
    public List<Patient> hello() {

        return List.of(
                new Patient(1L,"Peter","Putzig","Spasstenstrasse 12")
        );
    }
}
