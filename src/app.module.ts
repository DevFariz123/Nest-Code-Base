import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from '@database/config/ormconfig';
import { AuthModule } from '@components/auth/auth.module';
import { UserModule } from '@components/user/user.module';
import { HeroModule } from '@components/hero/hero.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(ormConfig()),
    AuthModule,
    UserModule,
    HeroModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
