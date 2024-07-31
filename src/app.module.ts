import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
   
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      logging:false,
      migrations: [__dirname + "/database/migrations/*{js,.ts}"],
      entities: [__dirname + "/**/*.entity{js,.ts}"],
      synchronize: true, // Definido como true apenas para desenvolvimento
    }),
    UsersModule


  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
