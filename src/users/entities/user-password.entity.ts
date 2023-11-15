import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('user_password')
export class UserPassword {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({ name: 'password', type: 'varchar', length: 255 })
    password: string;

    @Column({ name: 'is_active', type: 'boolean' })
    isActive: boolean;
}
