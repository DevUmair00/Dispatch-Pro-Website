package com.dispatchpro.service;

import com.dispatchpro.model.Register;
import com.dispatchpro.repository.RegisterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegisterService {

    @Autowired
    private RegisterRepository repo;

    public List<Register> getAll()
    {
        return repo.findAll();
    }

    public Register getById(Long id)
    {
        return repo.findById(id).orElseThrow();
    }


    public Register create(Register register)
    {
        return repo.save(register);
    }


    public void delete(Long id)
    {
        repo.deleteById(id);
    }


    public Register update(Long id , Register register)
    {
        Register pre = repo.findById(id).orElseThrow();

        pre.setName(register.getName());
        pre.setPhone(register.getPhone());
        pre.setEmail(register.getEmail());
        pre.setTruck_type(register.getTruck_type());
        pre.setNo_of_trucks(register.getNo_of_trucks());
        pre.setTruck_year(register.getTruck_year());
        pre.setOperating_state(register.getOperating_state());
        pre.setExperience(register.getExperience());
        pre.setMc_no(register.getMc_no());
        pre.setPreferred_lane(register.getPreferred_lane());

        return repo.save(pre);


    }
}
