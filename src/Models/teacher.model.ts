import { Schedule } from 'src/Models/schedule.model';
import { User } from './user.model';
import { Table, Model, Column, DataType, HasOne, ForeignKey, BelongsTo } from 'sequelize-typescript';
@Table
export class Teacher extends Model<Teacher> {
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
        allowNull: false
    })
    phoneNumber: string

    @HasOne(() => Schedule)
    scheduleId: Schedule

    @ForeignKey(() => User)
    @Column
    userId: number

    @BelongsTo(() => User)
    user: User
}