/*
 * Copyright 2020 - MATTR Limited
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Key pair signer
 */
export interface KeyPairSigner {
  /**
   * Signer function
   */
  readonly sign: (options: KeyPairSignerOptions) => Promise<Uint8Array>;
  /**
   * Signer function for blindSign
   */
  readonly blindSign: (
    options: KeyPairSignerForBlindSignOptions
  ) => Promise<Uint8Array>;
}

/**
 * Key pair signer options
 */
export interface KeyPairSignerOptions {
  readonly data: Uint8Array | Uint8Array[];
}

/**
 * Key pair signer for blindSign options
 */
export interface KeyPairSignerForBlindSignOptions {
  readonly data: Uint8Array | Uint8Array[];
  readonly proverCommitment: Uint8Array;
}
