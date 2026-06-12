'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { ReviewModel } from '@/interfaces';
import type { FormProps, IReviewForm } from './interface';
import { useCourse } from '@/app/context';
import { API } from '@/app/api';
import { Button, Input } from '@/components';
import { RatingRow } from './components';
import { ErrorStatus, SuccessStatus } from './ui';
import styles from './Form.module.css';

const Form = ({ productId, onReviewSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IReviewForm>({
    defaultValues: { name: '', title: '', description: '', rating: 0 },
  });

  const { products, pageId } = useCourse();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onSubmit = async (formData: IReviewForm) => {
    try {
      setErrorMessage(null);
      setIsSubmitting(true);
      setIsSuccess(false);

      const newReview = {
        id: Math.random().toString(36).substring(2, 9),
        name: formData.name,
        title: formData.title,
        description: formData.description,
        rating: formData.rating,
        createdAt: new Date().toISOString(),
      };

      let localizedReviews: ReviewModel[] = [];

      const updateProducts = products.map((product) => {
        if (product.id === productId) {
          localizedReviews = [...(product.reviews || []), newReview];

          return {
            ...product,
            reviews: localizedReviews,
          };
        }

        return product;
      });

      const res = await fetch(`${API.pages}/${pageId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ products: updateProducts }),
      });

      if (!res.ok) {
        throw new Error(
          `Ошибка сервера: ${res.statusText}. Не удалось сохранить отзыв.`,
        );
      }

      setIsSuccess(true);
      reset();

      onReviewSubmit(localizedReviews);
    } catch (error: any) {
      console.error(error);
      setErrorMessage(
        error.message || 'Произошла непредвиденная ошибка при отправке',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.row}>
        <Input
          {...register('name', { required: 'Пожалуйста, введите ваше имя' })}
          placeholder="Имя"
          error={errors.name}
          disabled={isSubmitting}
          aria-label="Ваше имя"
          aria-invalid={!!errors.name}
        />

        <Input
          {...register('title', {
            required: 'Пожалуйста, введите заголовок отзыва',
          })}
          placeholder="Заголовок отзыва"
          error={errors.title}
          disabled={isSubmitting}
          aria-label="Заголовок отзыва"
          aria-invalid={!!errors.title}
        />

        <RatingRow
          control={control}
          errors={errors}
          isSubmitting={isSubmitting}
        />
      </div>

      <textarea
        {...register('description', {
          required: 'Пожалуйста, введите текст отзыва',
        })}
        placeholder="Текст отзыва"
        rows={4}
        className={styles.textarea}
        disabled={isSubmitting}
        aria-label="Текст отзыва"
        aria-invalid={!!errors.description}
        aria-describedby={errors.description ? 'description-error' : undefined}
      />
      {errors.description && (
        <span
          id="description-error"
          role="alert"
          style={{ color: '#E53E3E', fontSize: '14px', marginTop: '4px' }}
        >
          {errors.description.message}
        </span>
      )}

      <div className={styles.actions}>
        <Button
          appearance="primary"
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? 'Отправка...' : 'Отправить'}
        </Button>

        <span className={styles.notice}>
          * Перед публикацией отзыв пройдет предварительную модерацию и проверку
        </span>
      </div>

      {isSuccess && (
        <SuccessStatus>
          ✔ Спасибо! Ваш отзыв успешно отправлен в MockAPI и сохранен в базе
          данных.
        </SuccessStatus>
      )}

      {errorMessage && <ErrorStatus errorMessage={errorMessage} />}
    </form>
  );
};

export default Form;
