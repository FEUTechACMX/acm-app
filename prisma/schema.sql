CREATE TABLE user_type (
    id INT PRIMARY KEY,
    user_type VARCHAR(20) UNIQUE NOT NULL,
    CHECK (
        user_type = 'guest',
        OR user_type = 'student',
        OR user_type = 'faculty',
    )
);

CREATE TABLE user (
    id INT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    user_type_id INT,
    FOREIGN KEY (user_type_id) REFERENCES user_type(id)
);

CREATE TABLE guest (
    id INT PRIMARY KEY,
    company VARCHAR(50) NOT NULL,
    position VARCHAR(50) NOT NULL,
    FOREIGN KEY (id) REFERENCES user(id)
);

CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    CHECK (name IN ("CS", "MPS", "HSC", "NSTP"))
);

CREATE TABLE faculty (
    id INT PRIMARY KEY,
    department_id INT,
    FOREIGN KEY (id) REFERENCES user(id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE student (
    id INT PRIMARY KEY,
    isACMMember BOOLEAN NOT NULL DEFAULT FALSE,
    FOREIGN KEY (id) REFERENCES user(id)
);

CREATE TABLE position (
    id INT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES position(id),
    CHECK (
        name IN (
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

CREATE TABLE committee (
    id INT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    CHECK (
        name IN (
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

CREATE TABLE year_t (
    id INT PRIMARY KEY,
    year INT UNIQUE NOT NULL
);

CREATE TABLE term (
    id INT PRIMARY KEY,
    term VARCHAR(3) UNIQUE NOT NULL,
    CHECK (
        term IN (
            '1st',
            '2nd',
            '3rd',
        )
    )
);

CREATE TABLE designation (
    id INT PRIMARY KEY,
    student_id INT,
    committee_id INT,
    position_id INT,
    year_id INT,
    FOREIGN KEY (student_id) REFERENCES student(id),
    FOREIGN KEY (committee_id) REFERENCES committee(id),
    FOREIGN KEY (position_id) REFERENCES position(id),
    FOREIGN KEY (year_id) REFERENCES year_t(id) CHECK (
        (
            SELECT
                isACMMember
            FROM
                student
            WHERE
                student_id = student.id
        ) = TRUE
    )
);

CREATE TABLE event_type (
    id INT PRIMARY KEY,
    type VARCHAR(20) UNIQUE NOT NULL,
    CHECK (
        type IN (
            'Convention',
            'Academic Competition',
            'General Assembly',
            'Outreach',
            'Seminar/Workshop',
            'Review Session',
        )
    )
);

CREATE TABLE working_committee_role (
    id INT PRIMARY KEY,
    name VARCHAR(20) UNIQUE NOT NULL,
    CHECK (
        name IN (
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

CREATE TABLE working_committee_head (
    id INT PRIMARY KEY,
    student_id INT,
    role_id INT,
    FOREIGN KEY (student_id) REFERENCES student(id),
    FOREIGN KEY (role_id) REFERENCES working_committee_role(id)
);

CREATE TABLE event_t (
    id INT PRIMARY KEY,
    event_type_id INT,
    description TEXT NOT NULL,
    year_id INT,
    term_id INT,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    FOREIGN KEY (event_type_id) REFERENCES event_type(id),
    FOREIGN KEY (year_id) REFERENCES year_t(id),
    FOREIGN KEY (term_id) REFERENCES term(id)
);

CREATE TABLE working_committee (
    id INT PRIMARY KEY,
    event_id INT,
    working_committee_head_id INT,
    FOREIGN KEY (event_id) REFERENCES event_t(event_id),
    FOREIGN KEY (working_committee_head_id) REFERENCES working_committee_head(id)
);

CREATE TABLE event_registration (
    id INT PRIMARY KEY,
    event_id INT,
    student_id INT,
    FOREIGN KEY (event_id) REFERENCES event_t(event_id),
    FOREIGN KEY (student_id) REFERENCES student(id)
);

CREATE TABLE organization (
    id INT PRIMARY KEY,
    name VARCHAR(70) UNIQUE NOT NULL,
    acronym VARCHAR(14) UNIQUE NOT NULL,
    site_link VARCHAR(70) UNIQUE NOT NULL,
    image_url VARCHAR(255) UNIQUE NOT NULL,
);
CREATE TABLE internal_organization (
    id INT PRIMARY KEY,
    FOREIGN KEY (id) REFERENCES organization(id),
    CHECK (
        acronym IN (
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

CREATE TABLE external_organization (
    id INT PRIMARY KEY,
    university_name VARCHAR(50) NOT NULL,
    FOREIGN KEY (id) REFERENCES organization(id)
);

CREATE TABLE company (
    id INT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    site_link VARCHAR(70) UNIQUE NOT NULL,
    image_url VARCHAR(255) UNIQUE NOT NULL,
);

CREATE TABLE event_sponsor (
    id INT PRIMARY KEY,
    company_id INT,
    event_id INT,
    FOREIGN KEY (company_id) REFERENCES company(id),
    FOREIGN KEY (event_id) REFERENCES event_t(id)
);

CREATE TABLE event_partner (
    id INT PRIMARY KEY,
    org_id INT,
    event_id INT,
    FOREIGN KEY (org_id) REFERENCES organization(id),
    FOREIGN KEY (event_id) REFERENCES event_t(id)
);

CREATE TABLE course_type (
    id INT PRIMARY KEY,
    type VARCHAR(10) UNIQUE NOT NULL,
    CHECK (
        type IN (
            'lecture',
            'laboratory',
        )
    )
);

CREATE TABLE year_level (
    id INT PRIMARY KEY,
    year INT UNIQUE NOT NULL,
    CHECK (
        year IN (
            1,
            2,
            3,
            4,
        )
    )
);

CREATE TABLE course (
    id INT PRIMARY KEY,
    code VARCHAR(10) UNIQUE NOT NULL,
    name VARCHAR(40) UNIQUE NOT NULL,
    department_id INT,
    course_type_id INT,
    year_level_id INT,
    term_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id),
    FOREIGN KEY (course_type_id) REFERENCES course_type(id),
    FOREIGN KEY (year_level_id) REFERENCES year_level(id),
    FOREIGN KEY (term_id) REFERENCES term(id)
);