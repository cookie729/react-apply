import Link from 'next/link';
import styles from '../../styles/Home.module.css'
import React, { useState } from 'react'
import styled from'styled-components'
import RenderResult from 'next/dist/server/render-result';


const onClickInput = () => {
  console.log("OK");
};

export default function ProductsList() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.title}>画像一覧</h2>

        <ul>
          <li>
            <Link href="/products/smartphone">
              <a>スマートフォン</a>
            </Link>
          </li>

          <li>
            <Link href="/products/pc">
              <a>パソコン</a>
            </Link>
          </li>

          <li>
            <Link href="/products/headphone">
              <a>ヘッドホン</a>
            </Link>
          </li>
        </ul>
        <label className={styles.label}>
          <input className={styles.input} onClick={onClickInput} type="file" accept="image/*" />ファイル選択
        </label>
        <p>選択されていません</p>
      </main>
    </div>
  );
}
