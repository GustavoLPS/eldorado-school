import { Teacher } from './teacher.model';
import { Table, Model, Column, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Student } from './student.model';

@Table
export class Schedule extends Model<Schedule> {
    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    date: string

    @Column({
        type: DataType.TIME,
        allowNull: false
    })
    time: string

    @ForeignKey(() => Student)
    @Column
    studentId: number

    @ForeignKey(() => Teacher)
    @Column
    teacherId: number

    @BelongsTo(() => Student)
    student: Student

    @BelongsTo(() => Teacher)
    teacher: Teacher
}