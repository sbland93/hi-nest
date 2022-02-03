import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true, // 유저가 보낸 것들을 타입 변경해준다.
      })
    )
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Welcome to my Movie API');
  });

  describe("/movies", () => {
    it("(GET)", () => {
      return request(app.getHttpServer())
        .get("/movies")
        .expect(200)
        .expect([]);
    });

    it("POST", () => {
      return request(app.getHttpServer())
      .post("/movies")
      .send({
        title: "Test",
        year: 2000,
        genres: ['test'],
      })
      .expect(201);
    })

    it('Delete', () => {
      return request(app.getHttpServer()).delete('/movies').expect(404);
    })
  })

  describe('/movies/:id', () => {

    it('Get 200', () => {
      return request(app.getHttpServer()).get('/movies/1').expect(200);
    })

    it('Get 200', () => {
      return request(app.getHttpServer()).get('/movies/999').expect(404);
    })

    it('PATCH', () => {
      return request(app.getHttpServer()).patch('/movies/1').send({title: 'Updated Test'}).expect(200);
    })

    it ('DELETE', () => {
      return request(app.getHttpServer()).delete('/movies/1').expect(200);
    })

    it ('POST 400', () => {
      return request(app.getHttpServer()).post('/movies').send({title: 'Test', other:'no'}).expect(400);
    })
  })

});