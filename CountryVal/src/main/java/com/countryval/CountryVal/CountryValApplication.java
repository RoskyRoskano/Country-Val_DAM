package com.countryval.CountryVal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.countryval.CountryVal.repository")
@EntityScan(basePackages = "com.countryval.CountryVal.model")

public class CountryValApplication {

	public static void main(String[] args) {
		SpringApplication.run(CountryValApplication.class, args);
	}
}