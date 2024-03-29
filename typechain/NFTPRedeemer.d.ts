/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface NFTPRedeemerInterface extends ethers.utils.Interface {
  functions: {
    "addRedeemableToken(address,address,uint256,uint256,uint256,bool)": FunctionFragment;
    "claimRedeemableToken(uint256,uint256)": FunctionFragment;
    "getRedeemableContract(uint256)": FunctionFragment;
    "getRedeemableTokenId(uint256)": FunctionFragment;
    "getRedeemableTokenPrice(uint256)": FunctionFragment;
    "getRedeemableTokenRemainingSupply(uint256)": FunctionFragment;
    "getRedeemableVaultWallet(uint256)": FunctionFragment;
    "initializeContract(string,string,address)": FunctionFragment;
    "itemIds(uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "nftpAddress()": FunctionFragment;
    "owner()": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setPausedStatus(bool)": FunctionFragment;
    "symbol()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateRedeemableTokenERC721(uint256,bool)": FunctionFragment;
    "updateRedeemableTokenPrice(uint256,uint256)": FunctionFragment;
    "updateRedeemableTokenQty(uint256,uint256,uint256)": FunctionFragment;
    "updateRedeemableTokenVaultWallet(uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addRedeemableToken",
    values: [string, string, BigNumberish, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "claimRedeemableToken",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRedeemableContract",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRedeemableTokenId",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRedeemableTokenPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRedeemableTokenRemainingSupply",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRedeemableVaultWallet",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeContract",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "itemIds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nftpAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPausedStatus",
    values: [boolean]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRedeemableTokenERC721",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRedeemableTokenPrice",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRedeemableTokenQty",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRedeemableTokenVaultWallet",
    values: [BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addRedeemableToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRedeemableToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRedeemableContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRedeemableTokenId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRedeemableTokenPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRedeemableTokenRemainingSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRedeemableVaultWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "itemIds", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nftpAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPausedStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRedeemableTokenERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRedeemableTokenPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRedeemableTokenQty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRedeemableTokenVaultWallet",
    data: BytesLike
  ): Result;

  events: {
    "ContractPaused(bool)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TokenAdded(address,uint256,uint256,uint256,uint256)": EventFragment;
    "TokenRedeemed(address,address,uint256,uint256,uint256,uint256)": EventFragment;
    "TokenUpdated(uint256,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ContractPaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenRedeemed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenUpdated"): EventFragment;
}

export class NFTPRedeemer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: NFTPRedeemerInterface;

  functions: {
    addRedeemableToken(
      _vaultWallet: string,
      _contractAddress: string,
      _tokenId: BigNumberish,
      _supply: BigNumberish,
      _priceInNFTP: BigNumberish,
      _isErc721: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimRedeemableToken(
      _itemToClaim: BigNumberish,
      _qtyToClaim: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRedeemableContract(
      _itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRedeemableTokenId(
      _itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRedeemableTokenPrice(
      _itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRedeemableTokenRemainingSupply(
      _itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRedeemableVaultWallet(
      _itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    initializeContract(
      _nameInitialize: string,
      _symbolInitialize: string,
      _nftpAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    itemIds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
        vaultWallet: string;
        contractAddress: string;
        tokenId: BigNumber;
        itemId: BigNumber;
        remainingSupply: BigNumber;
        priceInNFTP: BigNumber;
        isErc721: boolean;
      }
    >;

    name(overrides?: CallOverrides): Promise<[string]>;

    nftpAddress(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPausedStatus(
      _isPaused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateRedeemableTokenERC721(
      _itemToUpdate: BigNumberish,
      _isERC721: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateRedeemableTokenPrice(
      _itemToUpdate: BigNumberish,
      _priceInNFTP: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateRedeemableTokenQty(
      _itemToUpdate: BigNumberish,
      _qtyToAdd: BigNumberish,
      _qtyToSub: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateRedeemableTokenVaultWallet(
      _itemToUpdate: BigNumberish,
      _newVaultWallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addRedeemableToken(
    _vaultWallet: string,
    _contractAddress: string,
    _tokenId: BigNumberish,
    _supply: BigNumberish,
    _priceInNFTP: BigNumberish,
    _isErc721: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimRedeemableToken(
    _itemToClaim: BigNumberish,
    _qtyToClaim: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRedeemableContract(
    _itemId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getRedeemableTokenId(
    _itemId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRedeemableTokenPrice(
    _itemId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRedeemableTokenRemainingSupply(
    _itemId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRedeemableVaultWallet(
    _itemId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  initializeContract(
    _nameInitialize: string,
    _symbolInitialize: string,
    _nftpAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  itemIds(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
      vaultWallet: string;
      contractAddress: string;
      tokenId: BigNumber;
      itemId: BigNumber;
      remainingSupply: BigNumber;
      priceInNFTP: BigNumber;
      isErc721: boolean;
    }
  >;

  name(overrides?: CallOverrides): Promise<string>;

  nftpAddress(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPausedStatus(
    _isPaused: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateRedeemableTokenERC721(
    _itemToUpdate: BigNumberish,
    _isERC721: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateRedeemableTokenPrice(
    _itemToUpdate: BigNumberish,
    _priceInNFTP: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateRedeemableTokenQty(
    _itemToUpdate: BigNumberish,
    _qtyToAdd: BigNumberish,
    _qtyToSub: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateRedeemableTokenVaultWallet(
    _itemToUpdate: BigNumberish,
    _newVaultWallet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addRedeemableToken(
      _vaultWallet: string,
      _contractAddress: string,
      _tokenId: BigNumberish,
      _supply: BigNumberish,
      _priceInNFTP: BigNumberish,
      _isErc721: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    claimRedeemableToken(
      _itemToClaim: BigNumberish,
      _qtyToClaim: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getRedeemableContract(
      _itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getRedeemableTokenId(
      _itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRedeemableTokenPrice(
      _itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRedeemableTokenRemainingSupply(
      _itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRedeemableVaultWallet(
      _itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    initializeContract(
      _nameInitialize: string,
      _symbolInitialize: string,
      _nftpAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    itemIds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
        vaultWallet: string;
        contractAddress: string;
        tokenId: BigNumber;
        itemId: BigNumber;
        remainingSupply: BigNumber;
        priceInNFTP: BigNumber;
        isErc721: boolean;
      }
    >;

    name(overrides?: CallOverrides): Promise<string>;

    nftpAddress(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setPausedStatus(
      _isPaused: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateRedeemableTokenERC721(
      _itemToUpdate: BigNumberish,
      _isERC721: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    updateRedeemableTokenPrice(
      _itemToUpdate: BigNumberish,
      _priceInNFTP: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateRedeemableTokenQty(
      _itemToUpdate: BigNumberish,
      _qtyToAdd: BigNumberish,
      _qtyToSub: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateRedeemableTokenVaultWallet(
      _itemToUpdate: BigNumberish,
      _newVaultWallet: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    ContractPaused(
      isPaused?: null
    ): TypedEventFilter<[boolean], { isPaused: boolean }>;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    TokenAdded(
      contractAddress?: string | null,
      tokenId?: BigNumberish | null,
      itemId?: BigNumberish | null,
      remainingSupply?: null,
      priceInNFTP?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        contractAddress: string;
        tokenId: BigNumber;
        itemId: BigNumber;
        remainingSupply: BigNumber;
        priceInNFTP: BigNumber;
      }
    >;

    TokenRedeemed(
      redeemer?: string | null,
      contractAddress?: string | null,
      tokenId?: null,
      itemId?: BigNumberish | null,
      redeemedQty?: null,
      redeemedPrice?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        redeemer: string;
        contractAddress: string;
        tokenId: BigNumber;
        itemId: BigNumber;
        redeemedQty: BigNumber;
        redeemedPrice: BigNumber;
      }
    >;

    TokenUpdated(
      itemId?: BigNumberish | null,
      qtyAdded?: null,
      qtyRemoved?: null,
      priceInNFTP?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber, BigNumber],
      {
        itemId: BigNumber;
        qtyAdded: BigNumber;
        qtyRemoved: BigNumber;
        priceInNFTP: BigNumber;
      }
    >;
  };

  estimateGas: {
    addRedeemableToken(
      _vaultWallet: string,
      _contractAddress: string,
      _tokenId: BigNumberish,
      _supply: BigNumberish,
      _priceInNFTP: BigNumberish,
      _isErc721: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimRedeemableToken(
      _itemToClaim: BigNumberish,
      _qtyToClaim: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRedeemableContract(
      _itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRedeemableTokenId(
      _itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRedeemableTokenPrice(
      _itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRedeemableTokenRemainingSupply(
      _itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRedeemableVaultWallet(
      _itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initializeContract(
      _nameInitialize: string,
      _symbolInitialize: string,
      _nftpAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    itemIds(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    nftpAddress(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPausedStatus(
      _isPaused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateRedeemableTokenERC721(
      _itemToUpdate: BigNumberish,
      _isERC721: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateRedeemableTokenPrice(
      _itemToUpdate: BigNumberish,
      _priceInNFTP: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateRedeemableTokenQty(
      _itemToUpdate: BigNumberish,
      _qtyToAdd: BigNumberish,
      _qtyToSub: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateRedeemableTokenVaultWallet(
      _itemToUpdate: BigNumberish,
      _newVaultWallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addRedeemableToken(
      _vaultWallet: string,
      _contractAddress: string,
      _tokenId: BigNumberish,
      _supply: BigNumberish,
      _priceInNFTP: BigNumberish,
      _isErc721: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimRedeemableToken(
      _itemToClaim: BigNumberish,
      _qtyToClaim: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRedeemableContract(
      _itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRedeemableTokenId(
      _itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRedeemableTokenPrice(
      _itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRedeemableTokenRemainingSupply(
      _itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRedeemableVaultWallet(
      _itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initializeContract(
      _nameInitialize: string,
      _symbolInitialize: string,
      _nftpAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    itemIds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nftpAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPausedStatus(
      _isPaused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateRedeemableTokenERC721(
      _itemToUpdate: BigNumberish,
      _isERC721: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateRedeemableTokenPrice(
      _itemToUpdate: BigNumberish,
      _priceInNFTP: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateRedeemableTokenQty(
      _itemToUpdate: BigNumberish,
      _qtyToAdd: BigNumberish,
      _qtyToSub: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateRedeemableTokenVaultWallet(
      _itemToUpdate: BigNumberish,
      _newVaultWallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
