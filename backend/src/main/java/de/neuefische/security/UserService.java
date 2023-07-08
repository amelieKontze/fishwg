package de.neuefische.security;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserModel userModel = userRepo.findUserByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User " + username + " not found!"));
        return new User(userModel.getUsername(), userModel.getPassword(), List.of());
    }

    public UserModel addUser(UserModel userModel) {
        String encodedPassword = passwordEncoder.encode(userModel.getPassword());

        userModel.setUsername(userModel.getUsername());
        userModel.setName(userModel.getName());
        userModel.setEmail(userModel.getEmail());
        userModel.setPassword(encodedPassword);

        return userRepo.save(userModel);
    }
}
