package com.cars_project.auth.services;

import com.cars_project.auth.AuthenticationRequest;
import com.cars_project.auth.AuthenticationResponse;
import com.cars_project.auth.RegisterRequest;
import com.cars_project.auth.jwt.JwtService;
import com.cars_project.auth.users.User;
import com.cars_project.auth.users.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.cars_project.auth.users.Role;

import java.util.Date;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    @Value("${application.security.jwt.expiration}")
    private Long TOKEN_EXPIRATION;

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();

        repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .role(user.getRole())
                .exp(jwtService.extractExpiration(jwtToken))
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .role(user.getRole())
                .exp(jwtService.extractExpiration(jwtToken))
                .build();
    }
}