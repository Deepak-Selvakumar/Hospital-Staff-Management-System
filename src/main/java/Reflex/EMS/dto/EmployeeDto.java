package Reflex.EMS.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class EmployeeDto {
    private long id;
    private String FirstName;
    private String LastName;
    private String email;
}
