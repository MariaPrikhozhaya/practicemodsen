'use strict'


// Создайте класс University со свойствами названия университета и факультетов.
// Включите методы для добавления отдела, удаления отдела и отображения всех
// отделов. Создайте экземпляр класса University, а также реализуйте логику
// добавления и удаления факультетов.


class University {
    constructor(name, departments) {
        this.name = name;
        this.departments = departments;
      }

    addDepartment(department) {
        this.departments.push(department);
    }

    deleteDepartment(department) {
        this.departments = this.departments.filter((item) => item !== department)
    }

    printInfo() {
        console.log (`Список факультетов университета ${this.name}:`)
        let i = 1;
        for (let item of this.departments) {
            console.log (`${i}. ${item}`);
            i++;
        }
    }
}

const university1 = new University("БГУИР", ["ИЭФ", "ФКП", "ФИТУ", "ФРЭ", "ФКСиС", "ФИБ", "ВФ", 
"ФДПиПО"]);
const university2 = new University("БНТУ", ["АТФ", "ФГДИЭ", "МСФ", "МТФ", "ФММП", "ЭФ", "ФИТР", "ФТУГ",
"ИПФ", "ФЭС", "АФ", "СФ", "ПСФ", "ФТК", "ВТФ", "СТФ", "Филиал БНТУ, г.Солигорск", "ИТФ БНТУ-ТТУ",
"ФМС", "БНТУ-ТГТУ"]);

university1.printInfo();
university2.printInfo();

university1.addDepartment("ИИТ");
university1.printInfo();

university1.deleteDepartment("ФРЭ");
university1.printInfo();