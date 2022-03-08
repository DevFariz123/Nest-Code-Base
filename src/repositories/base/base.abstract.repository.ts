//Module yang digunakan untuk berhubungan langsung dengan database, untuk mengecek apahak service yang dibuat sudah terhubung ke database apa belum
import { BaseInterfaceRepository } from './base.interface.repository';
import { DeleteResult, Repository } from 'typeorm';

export abstract class BaseAbstractRepository<T> implements BaseInterfaceRepository<T> {

  private entity: Repository<T>;

  protected constructor(entity: Repository<T>) {
    this.entity = entity;
  }

  public async create(data: T | any): Promise<T> {
    return await this.entity.save(data);
  }

  public async findOneById(id: number): Promise<T> {
    return await this.entity.findOne(id);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public async findByCondition(filterCondition: any): Promise<T> {
    return await this.entity.findOne({where: filterCondition});
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public async  findWithRelations(relations: any): Promise<T[]> {
    return await this.entity.find(relations)
  }

  public async findAll(): Promise<T[]> {
    return await this.entity.find();
  }

  public async remove(id: string): Promise<DeleteResult> {
    return await this.entity.delete(id);
  }

}
