import { Teacher } from './teacher.model';
import { Table, Model, Column, DataType, BelongsTo, ForeignKey, HasOne } from 'sequelize-typescript';
import { Student } from './student.model';

@Table
export class User extends Model<User> {
    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    login: string

    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    password: string

    @Column({
        type: DataType.STRING(255),
        allowNull: true
    })
    token: string

    @HasOne(() => Teacher)
    teacherId: Teacher

    @HasOne(() => Student)
    studentId: Student
}