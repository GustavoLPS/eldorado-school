import { User } from './user.model';
import { Table, Model, Column, DataType, HasOne, ForeignKey, BelongsTo } from 'sequelize-typescript'
import { Schedule } from './schedule.model';

@Table
export class Student extends Model<Student> {
    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    name: string

    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    email: string

    @Column({
        type: DataType.STRING(20),
        allowNull: true
    })
    phoneNumber: string

    @ForeignKey(() => User)
    @Column
    userId: number

    @BelongsTo(() => User)
    user: User
    
    @HasOne(() => Schedule)
    schedule: Schedule
}