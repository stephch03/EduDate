import java.util.ArrayList;
import java.util.List;
//

public class Profile {

    private int age;
    private Major major;
    private List<String> intrests = new ArrayList<>();

    public Profile(int age, Major major) {
        this.age = age;
        this.major = major;

    }

}
