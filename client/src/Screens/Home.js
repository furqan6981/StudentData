import React, { useState} from 'react';
import toast from 'react-hot-toast';

const Home = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [studentId, setStudentId] = useState("");
    const [phone, setPhone] = useState("");
    const [course, setCourse] = useState("BSCS");
    const [gender, setGender] = useState("Male");
    const [city, setCity] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/add-student", {
                method: "POST",
                body: JSON.stringify({ name, email, studentId, course, phone, gender, city }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            if (response.ok) {
                toast.success(data.Message);
                setName(""); 
                setEmail("");
                setStudentId("");
                setCourse("BSCS");
                setPhone("");
                setGender("Male");
                setCity("");
            } else {
                toast.error(data.Message);
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
            console.error(error);
        }
    };
    

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Student Entry</h1>

            <form onSubmit={handleSubmit} className="border p-4 shadow-sm rounded">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter student name"
                        value={name}
                        onChange={(e) => setName(e.target.value )}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter student email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value )}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="studentId" className="form-label">Student ID</label>
                    <input
                        type="text"
                        className="form-control"
                        id="studentId"
                        placeholder="Enter student ID"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value )}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="course" className="form-label">Course</label>
                    <select
                        className="form-select"
                        id="course"
                        value={course}
                        onChange={(e) => setCourse(e.target.value )}
                    >
                        <option value="BSCS">BSCS</option>
                        <option value="BSIT">BSIT</option>
                        <option value="BSSE">BSSE</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value )}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <select
                        className="form-select"
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value )}
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder="Enter city"
                        value={city}
                        onChange={(e) => setCity(e.target.value )}
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Add Student</button>
            </form>
        </div>
    );
}

export default Home;
