CREATE TABLE User_type_T (
    user_type_id INT PRIMARY KEY,
    user_type VARCHAR(20) UNIQUE NOT NULL,
    CHECK (
        user_type = 'guest',
        OR user_type = 'student',
        OR user_type = 'faculty',
    )
);

CREATE TABLE User_T (
    user_id INT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    user_type_id INT,
    FOREIGN KEY (user_type_id) REFERENCES User_type_T(user_type_id)
);

CREATE TABLE Guest_T (
    guest_id INT PRIMARY KEY,
    user_id INT,
    company VARCHAR(50) NOT NULL,
    position VARCHAR(50) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User_T(user_id),
);

CREATE TABLE Department_T (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(50) UNIQUE NOT NULL,
    CHECK (
        department_name IN ("CS", "MPS", "HSC", "NSTP")
    )
);

CREATE TABLE Faculty_T (
    faculty_id INT PRIMARY KEY,
    user_id INT,
    department_id INT,
    FOREIGN KEY (user_id) REFERENCES User_T(user_id),
    FOREIGN KEY (department_id) REFERENCES Department_T(department_id)
);

CREATE TABLE Student_T (
    student_id INT PRIMARY KEY,
    user_id INT,
    isACMMember BOOLEAN NOT NULL DEFAULT FALSE,
    FOREIGN KEY (user_id) REFERENCES User_T(user_id)
);

CREATE TABLE Position_T (
    position_id INT PRIMARY KEY,
    position_name VARCHAR(50) UNIQUE NOT NULL,
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES Position_T(position_id),
    CHECK (
        position_name IN (
            'President',
            'VP Internal',
            'VP External',
            'Secretary',
            'Treasurer',
            'Auditor',
            'PRO',
            'Director for Creatives',
            'Director for Documentation',
            'Director for Media',
            'Director for Outreach',
            'Director for Publication',
            'Director for Publicity',
            'Director for Academics',
            'Director for Events',
            'Director for Logistics',
            'Director for Sports',
            'Director for Technicals',
            'Webmaster',
            'Associate Webmaster',
            'Junior Officer',
            'Member'
        )
    )
);

CREATE TABLE Committee_T (
    committee_id INT PRIMARY KEY,
    committee_name VARCHAR(50) UNIQUE NOT NULL,
    CHECK (
        committee_name IN (
            'Creative Committee',
            'Documentation Committee',
            'Media Committee',
            'Outreach Committee',
            'Publication Committee',
            'Publicity Committee',
            'Academics Committee',
            'Events Committee',
            'Logistics Committee',
            'Sports Committee',
            'Technicals Committee',
            'Software Engineering Committee',
        )
    )
);

CREATE TABLE Year_T (
    year_id INT PRIMARY KEY,
    year INT UNIQUE NOT NULL
);

CREATE TABLE Term_T (
    term_id INT PRIMARY KEY,
    term VARCHAR(10) UNIQUE NOT NULL,
    CHECK (
        term IN (
            '1st',
            '2nd',
            '3rd',
        )
    )
);

CREATE TABLE Designation_T (
    designation_id INT PRIMARY KEY,
    student_id INT,
    committee_id INT,
    position_id INT,
    year_id INT,
    FOREIGN KEY (student_id) REFERENCES Student_T(student_id),
    FOREIGN KEY (committee_id) REFERENCES Committee_T(committee_id),
    FOREIGN KEY (position_id) REFERENCES Position_T(position_id),
    FOREIGN KEY (year_id) REFERENCES Year_T(year_id),
    CHECK (
        (
            SELECT
                isACMMember
            FROM
                Student_T
            WHERE
                student_id = student_id
        ) = TRUE
    )
);

CREATE TABLE Event_type_T (
    event_type_id INT PRIMARY KEY,
    event_type VARCHAR(50) UNIQUE NOT NULL,
    CHECK (
        event_type IN (
            'Convention',
            'Academic Competition',
            'General Assembly',
            'Outreach',
            'Seminar/Workshop',
            'Review Session',
        )
    )
);

CREATE TABLE Working_committee_role_T (
    role_id INT PRIMARY KEY,
    role_name VARCHAR(50) UNIQUE NOT NULL,
    CHECK (
        role_name IN (
            'PROJECT HEAD',
            'PROJECT CO-HEAD',
            'CREATIVES HEAD',
            'PROGRAMS HEAD',
            'EXTERNALS HEAD',
            'SECRETARIAT HEAD',
            'FINANCE HEAD',
            'PUBLICITY HEAD',
            'MEDIA HEAD',
            'PUBLICATIONS HEAD',
            'TECHNICALS HEAD',
            'LOGISTICS HEAD',
            'ACADEMICS HEAD',
        )
    )
);

CREATE TABLE Working_committee_head_T (
    id INT PRIMARY KEY,
    student_id INT,
    role_id INT,
    FOREIGN KEY (student_id) REFERENCES Student_T(student_id),
    FOREIGN KEY (role_id) REFERENCES Working_committee_role_T(role_id)
);

CREATE TABLE Event_T (
    event_id INT PRIMARY KEY,
    event_type_id INT,
    description TEXT NOT NULL,
    year_id INT,
    term_id INT,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    FOREIGN KEY (event_type_id) REFERENCES Event_type_T(event_type_id),
    FOREIGN KEY (year_id) REFERENCES Year_T(year_id),
    FOREIGN KEY (term_id) REFERENCES Term_T(term_id)
);

CREATE TABLE Working_committee_T (
    id INT PRIMARY KEY,
    event_id INT,
    working_committee_head_id INT,
    FOREIGN KEY (event_id) REFERENCES Event_T(event_id),
    FOREIGN KEY (working_committee_head_id) REFERENCES Working_committee_head_T(id)
);

CREATE TABLE Event_registration_T (
    id INT PRIMARY KEY,
    event_id INT,
    student_id INT,
    FOREIGN KEY (event_id) REFERENCES Event_T(event_id),
    FOREIGN KEY (student_id) REFERENCES Student_T(student_id)
);

CREATE TABLE Organization_T (
    org_id INT PRIMARY KEY,
    org_name VARCHAR(70) UNIQUE NOT NULL,
    name_acronym VARCHAR(14) UNIQUE NOT NULL,
    site_link VARCHAR(70) UNIQUE NOT NULL,
    org_image VARCHAR(255) UNIQUE NOT NULL,
);

CREATE TABLE Internal_organization (
    id INT PRIMARY KEY,
    org_id INT,
    FOREIGN KEY (org_id) REFERENCES Organization_T(org_id),
    CHECK (
        name_acronym IN (
            'AITS',
            'MECHS',
            'FSOC',
            'ECESS',
            'JPCS',
            'GDSC',
            'CPEO',
            'TEC',
            'AC',
            'SAVE',
            'ACES',
            'ASTI',
            'ACM'
        )
    )
);

CREATE TABLE External_organization (
    id INT PRIMARY KEY,
    org_id INT,
    university_name VARCHAR(50) NOT NULL,
    FOREIGN KEY (org_id) REFERENCES Organization_T(org_id),
);

CREATE TABLE Company_T (
    id INT PRIMARY KEY,
    company_name VARCHAR(50) UNIQUE NOT NULL,
    site_link VARCHAR(70) UNIQUE NOT NULL,
    company_image VARCHAR(255) UNIQUE NOT NULL,
);

CREATE TABLE Event_sponsor_T (
    id INT PRIMARY KEY,
    company_id INT,
    event_id INT,
    FOREIGN KEY (company_id) REFERENCES Company_T(id),
    FOREIGN KEY (event_id) REFERENCES Event_T(event_id)
);

CREATE TABLE Event_partner_T (
    id INT PRIMARY KEY,
    org_id INT,
    event_id INT,
    FOREIGN KEY (org_id) REFERENCES Organization_T(org_id),
    FOREIGN KEY (event_id) REFERENCES Event_T(event_id)
);

CREATE TABLE Course_T (
    course_id INT PRIMARY KEY,
    course_code VARCHAR(10) UNIQUE NOT NULL,
    course_name VARCHAR(50) UNIQUE NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES Department_T(department_id)
);