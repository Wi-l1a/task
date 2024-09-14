import { PositionDetails } from "../pages/NewEmployee/NewEmployee";


export const getEmployeesFromLS = (): PositionDetails[] => {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
        const employeesFromLS: PositionDetails[] = JSON.parse(storedEmployees);
        return employeesFromLS.map((position) => ({
            ...position,
            isActive: false,
            employees: position.employees.map((employee) => ({
                ...employee,
            })),
        }));
    }
    return [];
};


export const saveEmployeesToLS = (employees: PositionDetails[]) => {
    const employeesWithoutImages = employees.map((positionDetail) => ({
        ...positionDetail,
        employees: positionDetail.employees.map((employee) => ({
            ...employee,
            image: '',
        })),
    }));
    localStorage.setItem('employees', JSON.stringify(employeesWithoutImages));
};
